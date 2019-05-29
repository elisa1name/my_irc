import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <div>
            <form>
                <label for="utilisatuer">Utilisateur</label>
                <input type="text" id="name" name="name"></input>
                <button>find</button>
            </form>
            </div>
        );
    }
}
export default Form;