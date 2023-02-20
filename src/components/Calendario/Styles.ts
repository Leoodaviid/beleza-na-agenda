import styled from "styled-components";

export const CalendarioStyle = styled.div`
  p {
    text-align: left;
    margin-top: 36px;
  }

  .nice-dates-day.-highlight {
    color: #e4acdd;
  }

  .nice-dates-day {
    font-size: 20px;
  }

  .nice-dates-navigation {
    color: #742092;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 1px;
  }
  .nice-dates-navigation_previous:before,
  .nice-dates-navigation_next:before {
    border-right: 2px solid #742092;
    border-top: 2px solid #742092;
    height: 20px;
    width: 20px;
  }
  .nice-dates-navigation_previous:hover:before,
  .nice-dates-navigation_next:hover:before {
    border-color: #742092;
  }
  .nice-dates-week-header_day {
    color: #404040;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
  }

  .nice-dates-day_month {
    font-size: 14px;
    top: -1px;
  }

  .nice-dates-day.-selected * {
    color: #7d2a90;
  }

  .nice-dates-day:before {
    background-color: #ffc973;
  }

  .nice-dates-day.-disabled {
    color: #e4acdd;
  }
`;
