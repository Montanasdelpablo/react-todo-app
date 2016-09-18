import React from 'react';

var TodoList = React.createClass({
    getInitialState: function () {
        return {
            Todos: [
                "Bacon",
                "Cheese",
                "Third todo item"
                ],
        }
    },

    addTodo: function(val) {
      this.setState({
          Todos: this.state.Todos.concat([val])
      })
      console.log('new Todo added: ' + val)
    },
    removeTodo: function(i) {
       var arr = this.state.Todos
       arr.splice(i, 1)
       this.setState({
           Todos: arr
       })
       console.log("Removed item, new list is: " + arr)
    },
    updateTodo: function(val, i) {
        console.log('Updating todo to: ' + val)
        var arr = this.state.Todos
        arr[i] = val;
        console.log(arr[i])
        this.setState({
            Todos: arr
        })
    },

    eachTodo: function (Todo, index) {
         return (
                   <Todos
                   updateTodo={this.updateTodo} 
                   removeTodo={this.removeTodo}
                   key={index}
                   id={index}
                   >
                    {Todo}
                   </Todos>
        );
    },
    
    render: function () {
        return (
            <div className="Todolist">
                
                <TodoForm 
                addTodo={this.addTodo} 
                />

                { this.state.Todos.map(this.eachTodo) }                   
                    

            </div>
        );
    }
});


var TodoForm = React.createClass({
    getInitialState: function () {
        return {
            message: ""
        }
    },
    
    handleForm: function() {
       this.setState({
           message: this.refs.addTodo.value
       });
      
    },
    sendForm: function() {
        this.props.addTodo(this.state.message)
    },
    
    render: function () {
        return (
            <div className="Todoform"> 
                <input className="TodoInput" ref="addTodo" onChange={this.handleForm} value={this.state.message} />
                <button className="button-success" onClick={this.sendForm} href="#"> Add Todo</button>
            </div>
        );
    }
});

var Todos = React.createClass({
    getInitialState: function() {
        return {
            Editing: false,
        }
    },
    
    edit: function() {
        this.setState({
            Editing: true
        })
        console.log("Entering editing state..")
    },
    save: function () {
        var val = this.refs.TodoMessage.value
        var i = this.props.id
        this.props.updateTodo(val, i)        
        
        console.log("Saved item to: " + val + ", index number: " + i)
        this.setState({
            Editing: false
        })
        console.log("Left editing state..")
    
        },
    remove: function() {
        var i = this.props.id
        this.props.removeTodo(i)
     },
    
    renderNormal: function() {
        return (
             <div className="card"> 
                <div className="card-image">
                    
                </div>

                <div className="card-content">  
                    <p>{ this.props.children } </p>
                </div>

                <div className="card-action">
                    <button className="button-secondary" onClick={this.edit} href="#"> <a> Edit </a> </button>
                    <button className="button-error" onClick={this.remove} href="#"> <a> Remove </a> </button>
                </div>
            </div>
        );
    },
    renderForm: function() {
         return (
             <div className="card">
                 <div role="presentation" className="card-image">
                    
                </div>

                <div className="card-content">
                    <input ref="TodoMessage" className="pure-input-rounded" defaultValue={this.props.children} />
                    
                </div>   

                <div className="card-action">
                    <button className="button-success" onClick={this.save} href="#"><a> Save </a> </button>
                </div>
            </div>

        );
    },
    
    render: function () {
       if (this.state.Editing === false) {
           return this.renderNormal()
       } else {
           return this.renderForm()
       }
    }
});

export default TodoList