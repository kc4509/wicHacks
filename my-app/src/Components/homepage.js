import * as React from "react";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";

import { PieChart } from "@mui/x-charts/PieChart";

export default function Homepage() {
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
    
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)

    function clockTime() {
        const x = document.getElementById("clockInfo");
        if (value = '1:00'){
            setShowResults(true);
        } else {
            x.style.display = "none";
        }
    }

  return (
    <homepage>
      <div className="center">
        <h3>The Circadian Cycle</h3>
        <div className="flexRow">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimeClock", "TimeClock", "TimeClock"]}>
              <DemoItem>
                <TimeClock views={["hours"]} value={value} onChange={(newValue) => setValue(newValue)}/>
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>

          <div id="clockInfo1">
             { showResults ? <Results /> : null }
          </div>
          
        </div>
      </div>

      <PieChart
        series={[
          {
            innerRadius: 50,
            outerRadius: 100,
            paddingAngle: 4,
            cornerRadius: 5,
            startAngle: -45,
            endAngle: 360,
            cx: 150,
            cy: 150,
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={400}
        height={300}
      />
    </homepage>
  );
}

const Results = () => (
    <div id="results" className="search-results">
      Some Results
    </div>
  )
