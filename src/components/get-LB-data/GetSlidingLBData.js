import React, { Component } from 'react'
import './../css/LB.css'

export default class ApiTest extends Component {
    
    state = {
        loading: true,
        entry1: null, entry2: null, entry3: null, entry4: null, entry5: null,
        entry6: null, entry7: null, entry8: null, entry9: null, entry10: null
    };
    
    async componentDidMount(){
        const formData = new FormData();
        formData.append("api_token","8b444736f91f991ce2ab67da833d8d784674a546f8b27d12461dd58992bb20b9");
        formData.append("quantity", "10");
        formData.append("g_id", "2");

        const url="https://txstate.oscarfortanel.dev/CS3398/kidzblocks/api/v1/getLeaderboard.php";
        const response = await fetch(url,
            {
                method: 'POST',
                mode: 'cors',
                body: formData
            });
        const data = await response.json();

            this.setState({entry1: data.scores[0], loading: false });
            this.setState({entry2: data.scores[1], loading: false });
            this.setState({entry3: data.scores[2], loading: false });
            this.setState({entry4: data.scores[3], loading: false });
            this.setState({entry5: data.scores[4], loading: false });
            this.setState({entry6: data.scores[5], loading: false });
            this.setState({entry7: data.scores[6], loading: false });
            this.setState({entry8: data.scores[7], loading: false });
            this.setState({entry9: data.scores[8], loading: false });
            this.setState({entry10: data.scores[9], loading: false });
            for(let i=0;i<10;i++){
                console.log(data.scores[i].name);
                console.log(data.scores[i].score)
            }
    }

  render() {
    return (
      <div>
          {this.state.loading || !this.state.entry1 || !this.state.entry2 || 
          !this.state.entry3 || !this.state.entry4 || !this.state.entry5 ||
          !this.state.entry6 || !this.state.entry7 || !this.state.entry8 ||
          !this.state.entry9 || !this.state.entry10 ? (
            <div>loading...</div>
          ) : (
            <div className = "test">
                <div className="posts">
                    <div className="singleScore">
                        <div className="name">{this.state.entry1.name}</div>
                        <div className="score">{this.state.entry1.score}</div>
                    </div>
                    <div className="singleScore">
                        <div className="name">{this.state.entry2.name}</div>
                        <div className="score">{this.state.entry2.score}</div>
                    </div>
                    <div className="singleScore">
                        <div className="name">{this.state.entry3.name}</div>
                        <div className="score">{this.state.entry3.score}</div>
                    </div>
                    <div className="singleScore">
                        <div className="name">{this.state.entry4.name}</div>
                        <div className="score">{this.state.entry4.score}</div>
                    </div>
                    <div className="singleScore">
                        <div className="name">{this.state.entry5.name}</div>
                        <div className="score">{this.state.entry5.score}</div>
                    </div>
                    <div className="singleScore">
                        <div className="name">{this.state.entry6.name}</div>
                        <div className="score">{this.state.entry6.score}</div>
                    </div>
                    <div className="singleScore">
                        <div className="name">{this.state.entry7.name}</div>
                        <div className="score">{this.state.entry7.score}</div>
                    </div>
                    <div className="singleScore">
                        <div className="name">{this.state.entry8.name}</div>
                        <div className="score">{this.state.entry8.score}</div>
                    </div>
                    <div className="singleScore">
                        <div className="name">{this.state.entry9.name}</div>
                        <div className="score">{this.state.entry9.score}</div>
                    </div>
                    <div className="singleScore">
                        <div className="name">{this.state.entry10.name}</div>
                        <div className="score">{this.state.entry10.score}</div>
                    </div>
                </div>
            </div>
          )}
      </div>
    )
  }
}
