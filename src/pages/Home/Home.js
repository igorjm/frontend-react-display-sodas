import React, {Component} from 'react';
import api from '../../services/api'

import './Home.css'
import { Grid, Transition, Dropdown } from 'semantic-ui-react'

import SodaCard from '../../components/SodaCard'

class Home extends Component {
  state = {
    options: [],
    filtro: ''
  }

  async componentDidMount() {
    const response = await api.get('refrigerante/listar')
    this.setState({ options: response.data })
    console.log('response.data', response.data)
  }

  handleFilter = (value) => {
    console.log('value', value)
    this.setState({
      filtro: value
    })
    console.log('this.state.filtro',this.state.filtro)
  }

  render() {
    return(
      <Grid columns={3}>
            <Grid.Row className="page-title">
                <h1>Refrigerantes</h1>
                <Dropdown
                  options={[
                    { key: "todos", text: "Todos", value: "todos" },
                    { key: "cocacola", text: "Coca-Cola", value: "Coca-cola" },
                    { key: "antartica", text: "Antartica", value: "Antartica" },
                    { key: "pureza", text: "Pureza", value: "Pureza" },
                  ]}
                  placeholder='Selecione a Marca'
                  onChange={this.handleFilter}
                  selection
                />
            </Grid.Row>
            <Grid.Row>
                <Transition.Group>
                    {this.state.options.map((sodas) => (
                        <Grid.Column key={sodas.id} style={{ marginBottom: 20 }}>
                            <SodaCard sodas={sodas} filtro={this.state.filtro}/>
                        </Grid.Column>
                    ))}
                </Transition.Group>
            </Grid.Row>
        </Grid>
    )
  }
}

export default Home