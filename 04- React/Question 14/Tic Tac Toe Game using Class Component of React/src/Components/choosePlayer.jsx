import { Component } from "react";

class Player extends Component {
  handleForm(e) {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }
  render() {
    return (
      <form
        onSubmit={(e) => this.handleForm(e)}
        className="flex justify-center items-center gap-4 p-4"
      >
        <label className="flex flex-col bg-[#ffc300] p-2 rounded drop-shadow cursor-pointer">
          <input className="" type="radio" name="player" value="X" />
          Player X
        </label>
        <label className="flex flex-col bg-[#ffc300] p-2 rounded drop-shadow cursor-pointer">
          <input className="" type="radio" name="player" value="O" />
          Player O
        </label>
        <button
          className="bg-[#14213d] py-2 px-4 text-white rounded drop-shadow-md hover:bg-[#0b1326] transition-all duration-200"
          type="submit"
          value="Start"
        >
          Start
        </button>
      </form>
    );
  }
}

export default Player;
