import React, {Component} from 'react';
import api from '../../services/api'

import './Home.css'
import { Grid, Transition, Dropdown } from 'semantic-ui-react'

import SodaCard from '../../components/SodaCard'

const filtrosOptions = [
  { key: "todos", text: "Todos", value: "todos" },
  { key: "cocacola", text: "Coca-Cola", value: "Coca-cola" },
  { key: "antartica", text: "Antartica", value: "Antartica" },
  { key: "pureza", text: "Pureza", value: "Pureza" },
]

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [],
      filtro: ''
    }
  }

  async componentDidMount() {
    const response = await api.get('refrigerante/listar')
    this.setState({ options: response.data })
    // console.log('response.data', response.data)
  }

  handleFilter = (e, data) => {
    // console.log('data', data.value)
    this.setState({
      filtro: data.value
    })
  }

  render() {
    const { filtro } = this.state;

    return(
      <Grid columns={3}>
            <Grid.Row className="page-title">
                <h1>Refrigerantes</h1>
                <Dropdown
                  placeholder='Selecione a Marca'
                  // value={filtro}
                  options={filtrosOptions}
                  onChange={this.handleFilter}
                  selection
                />
            </Grid.Row>
            <Grid.Row>
                <Transition.Group>
                    {this.state.options.map((sodas) => (
                        <Grid.Column key={sodas.id} style={{ marginBottom: 20 }}>
                            <SodaCard sodas={sodas} filtro={filtro}/>
                        </Grid.Column>
                    ))}
                </Transition.Group>
            </Grid.Row>
        </Grid>
    )
  }
}

export default Home