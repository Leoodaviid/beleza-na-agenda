import { useEffect, useState } from "react";
import Circle from "../Circle/Circle";
import { Container, Content, ProgressBar, Progress } from "./style";
type StepperProps = {
  active: number;
};
const Stepper = ({ active }: StepperProps) => {
  const [circle] = useState(4);
  const arr = [];
  const [bar, setBar] = useState(0);

  useEffect(() => {
    setBar(active === 2 ? 50 : 0 || active === 3 ? 100 : 0);
  }, [circle, active]);

  for (let i = 1; i < circle; i++) {
    arr.push(
      <Circle className={i <= active ? "circleActive" : "circle"} key={i}>
        {i}
      </Circle>
    );
  }

  return (
    <Container>
      <Content>
        <ProgressBar>
          <Progress
            style={{ width: bar + "%" }}
            className={"animeLeft"}
          ></Progress>
          {arr}
        </ProgressBar>
      </Content>
    </Container>
  );
};

export default Stepper;
