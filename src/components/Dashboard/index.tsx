import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container, Content } from "./styles";

export function Dashboard(){
    return(
        <Container>
            <Content>
              <Summary />
              <TransactionsTable />
            </Content>
        </Container>
    )
}