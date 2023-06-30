import { styled } from 'styled-components';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRange, RangeKeyDict } from 'react-date-range';
import { useState } from 'react';
import { Range } from 'react-date-range';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  width: 800px;
  height: fit-content;
  min-height: 300px;
  padding: 40px 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 22px -6px rgba(0, 0, 0, 0.2);
`;

const DaypickerPage = () => {
  const [range, setRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  function selectHandler(date: Date) {
    console.log(date);
  }

  function rangeHandler(range: RangeKeyDict) {
    setRange(range.selection);
  }

  return (
    <Container>
      <Calendar
        date={new Date()}
        onChange={selectHandler}
      />
      <DateRange
        ranges={[range]}
        rangeColors={['orange']}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        onChange={rangeHandler}
      />
      <p>{range.startDate?.toDateString()}</p>
      <p>{range.endDate?.toDateString()}</p>
    </Container>
  );
};

export default DaypickerPage;
