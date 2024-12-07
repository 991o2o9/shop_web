import CreateProd from "../../modules/AdminModule/CreateProd/CreateProd";
import { OrderList } from "../../modules/AdminModule/OrderList/OrderList";
import { Container } from "../../ui/Container/Container";

export const Admin = () => {
  return (
    <div className="container">
      <CreateProd />
      <Container>
        <OrderList />
      </Container>
    </div>
  );
};
