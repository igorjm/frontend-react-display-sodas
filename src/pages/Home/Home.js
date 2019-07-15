import React, {Component} from 'react';
import api from '../../services/api'

import './Home.css'
import { Grid, Transition } from 'semantic-ui-react'

import SodaCard from '../../components/SodaCard'

class Home extends Component {
  state = {
    soda: []
  }

  async componentDidMount() {
    const response = await api.get('refrigerante/listar')
    this.setState({ soda: response.data })
  }

  render() {
    return(
      <Grid columns={3}>
            <Grid.Row className="page-title">
                <h1>Refrigerantes</h1>
            </Grid.Row>
            <Grid.Row>
                <Transition.Group>
                    {this.state.soda.map((sodas) => (
                        <Grid.Column key={sodas.id} style={{ marginBottom: 20 }}>
                            <SodaCard sodas={sodas} />
                        </Grid.Column>
                    ))}
                </Transition.Group>
            </Grid.Row>
        </Grid>
    )
  }
}

export default Home