import { Container, Table, Zoom, Operation, Footer } from "./styles";
import { WiTime4 } from "react-icons/wi";

export function Schedule() {
  return (
    <Container>
      <Operation>
        <WiTime4 />
        <p>Segunda-feira à Sexta-feira de 07:00–09:00 & 19:00–21:00 Sabádo de 11:00–12:00*</p>
      </Operation>
      <Table>
        <thead>
          <tr>
            <td></td>
            <td>Segunda</td>
            <td>Terça</td>
            <td>Quarta</td>
            <td>Quinta</td>
            <td>Sexta</td>
            <td>Sábado</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>7H</td>
            <td>Presencial</td>
            <td>Presencial</td>
            <td>Presencial</td>
            <td>Presencial</td>
            <td>Presencial</td>
            <td></td>
          </tr>

          <tr>
            <td>8H</td>
            <Zoom>ZOOM</Zoom>
            <td>Presencial</td>
            <Zoom>ZOOM</Zoom>
            <td>Presencial</td>
            <td>Presencial</td>
            <td></td>
          </tr>

          <tr>
            <td>9H</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>10H</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Zoom>ZOOM</Zoom>
          </tr>

          <tr>
            <td>11H</td>
            <td></td>
            <Zoom>ZOOM</Zoom>
            <td></td>
            <Zoom>ZOOM</Zoom>
            <td></td>
            <td>Presencial</td>
          </tr>

          <tr>
            <td>19h</td>
            <td>Presencial</td>
            <td>Presencial</td>
            <td>Presencial</td>
            <td>Presencial</td>
            <td>Presencial</td>
            <td></td>
          </tr>

          <tr>
            <td>20H</td>
            <td>Presencial</td>
            <Zoom>ZOOM</Zoom>
            <td>Presencial</td>
            <Zoom>ZOOM</Zoom>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Footer>Os horários podem sofrer alterações*</Footer>
    </Container>
  );
}
