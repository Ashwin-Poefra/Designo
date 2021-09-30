import React from "react";

import { Container, Message, Icon } from "./NotificationStyles";

const Notification = ({children}) => {
  return (
    <Container role="alert">
      <Message>
        <Icon>
          <i className="fas fa-check-circle"></i>
        </Icon>
        {children}
      </Message>
    </Container>
  );
};

export default Notification;
