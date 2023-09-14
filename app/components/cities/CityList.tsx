import { Button, ButtonGroup, Table } from "react-bootstrap";
import { CityDto } from "../../../dto/city.dto";

type IProps = { cities: CityDto[]; setCityDto: (c: CityDto) => void }

export function CityList(props: IProps) {
    const { cities, setCityDto } = props
    const hadnleFillForm = (city: CityDto) => {
        setCityDto(city)
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Miestas</th>
                    <th>Gyventojų skaičius</th>
                    <th>Veiksmai</th>
                </tr>
            </thead>
            <tbody>
                {cities.map((city, key) => (
                    <tr key={key}>
                        <td>{city.name}</td>
                        <td>{city.population}</td>
                        <td>
                            <ButtonGroup>
                                <Button variant="primary" onClick={() => hadnleFillForm(city)}>Keisti</Button>
                                <Button variant="danger">Šalinti</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}