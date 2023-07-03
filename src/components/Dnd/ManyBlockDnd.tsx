import { useRef, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { styled } from 'styled-components';
import DropItem from './DropItem';

const DUMMY = [
  {
    id: '1',
    content: 'hello',
  },
  {
    id: '2',
    content: 'nice',
  },
  {
    id: '3',
    content: 'good',
  },
];

const DUMMY_SECOND = [
  {
    id: '141',
    content: 'hello2',
  },
  {
    id: '1245',
    content: 'nice2',
  },
  {
    id: '5412',
    content: 'good2',
  },
];

export interface Item {
  id: string;
  content: string;
}

interface Data {
  [key: string]: Item[];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 22px -6px rgba(0, 0, 0, 0.2);

  .boxes {
    display: flex;
    gap: 20px;
  }
`;

const Dropzone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  gap: 10px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 22px -6px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 20px;
    font-weight: 600;
  }
`;

const droppableArr = ['first', 'second'];

const ManyBlockDnd = () => {
  const [data, setData] = useState<Data>({
    first: DUMMY,
    second: DUMMY_SECOND,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  function deleteItemHandler(id: string, title: string) {
    const filteredData = data[title].filter((item) => item.id !== id);
    const result = {
      ...data,
      [title]: filteredData,
    };
    setData(result);
  }

  return (
    <Container>
      <h1>Many Block</h1>
      <div>
        <input
          type="text"
          ref={inputRef}
        />
        <button
          onClick={() => {
            if (inputRef.current!.value === '') return;

            setData((prev) => {
              return {
                ...prev,
                first: [
                  ...prev.first,
                  { id: Math.random().toString(), content: inputRef.current!.value },
                ],
              };
            });
          }}
        >
          add
        </button>
      </div>
      <DragDropContext
        onDragEnd={(result) => {
          if (!result.destination) return;

          const { source, destination } = result;

          if (source.droppableId === destination.droppableId) {
            const items = [...data[source.droppableId]];
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            setData((prev) => {
              return {
                ...prev,
                [source.droppableId]: items,
              };
            });
          } else {
            const removedItems = [...data[source.droppableId]];
            const newItems = [...data[destination.droppableId]];
            const [reorderedItem] = removedItems.splice(result.source.index, 1);
            newItems.splice(result.destination.index, 0, reorderedItem);
            setData((prev) => {
              return {
                ...prev,
                [destination.droppableId]: newItems,
                [source.droppableId]: removedItems,
              };
            });
          }
        }}
      >
        <div className="boxes">
          {droppableArr.map((title) => {
            return (
              <Dropzone key={title}>
                <h2>{title}</h2>
                <Droppable droppableId={title}>
                  {(provided) => (
                    <div
                      className={title}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {data[title].map((item, idx) => (
                        <DropItem
                          item={item}
                          idx={idx}
                          key={item.id}
                          onDelete={() => {
                            deleteItemHandler(item.id, title);
                          }}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </Dropzone>
            );
          })}
        </div>
      </DragDropContext>
    </Container>
  );
};

export default ManyBlockDnd;
