import React , {Component} from 'react'

export default class App extends Component {
  constructor(props) {
  super(props);

    this.state = {
      title: '',
      description: '',
      tasks: []
    };
  this.addTask = this.addTask.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.fetchTasks = this.fetchTasks.bind(this)
}



   addTask(e){
    fetch('/api/tasks', {
      //voy a hacer una peticion post a /api/tasks
      method:'POST',
      // que datos le voy a Enviar
      body:JSON.stringify(this.state),
      // tipo de contenido que te voy a enviar
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
      })
      .then(res =>  res.json()) //obtener respuesta del servidor
      .then(data=>{
          //cuando fue guardada mostrar
          console.log(data)

          //materialize task saved toast
          M.toast({html:'Task Saved'})
          //limpiar formulario
          this.setState({
            title:'',
            description:'',
          })
          this.fetchTasks();
      })

      .catch(err => console.error(err))
    e.preventDefault();
  }



  handleChange(e){
    //del e.target quiero estos dos valores nada mas, capturo lo que escribo y cambio el estado
    const {name,value} = e.target;
    this.setState({
      [name]:value
    })

  }
  componentDidMount() {
      this.fetchTasks();
    }

    fetchTasks() {
      fetch('/api/tasks')
        .then(res => res.json())
        .then(data => {
          this.setState({tasks: data});
          console.log(this.state.tasks);
        });
    }

const lucas = () => {

}

  render(){
    return(
      <div>
        {/*NAVIGATION*/}
        <nav className="light-blue darken-4">
          <div className="container">
            <a className="brand-logo" href="/"> MERN Stack LUCAS APP</a>


          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s4">
              <div className="card">
                <div className="card-content">
                  <form onSubmit= {this.addTask}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="title" value={this.state.title} onChange={this.handleChange} type="text" placeholder="Task Title"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea name="description" onChange={this.handleChange} value={this.state.description} className="materialize-textarea" placeholder="Tast description">

                        </textarea>
                      </div>
                    </div>
                    <button type="submit" className="btn light-blue darken-4">Enviar</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">
                <table>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Descripcion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    this.state.tasks.map(task => {
                      return (
                        <tr key={task._id}>
                          <td>{task.title}</td>
                          <td>{task.description}</td>
                          <td>

                          </td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                  </table>
            </div>


          </div>
        </div>


      </div>
    )
  }
}
