import React from 'react';

export default class EditCommentInput extends React.Component {

  constructor(props) {
    super(props);
    this.editButtonClicked = this.editButtonClicked.bind(this);
    this.state = {
      body: props.comment.body,
      author_id: props.comment.author_id,
      post_id: props.comment.post_id,
      id: props.comment.id
    }
  }

  editButtonClicked(e) {
    e.preventDefault();
    if (e.currentTarget.value !== '') {
      this.props.updateComment({comment: this.state})
      this.props.setEditingState(this.state.body)
    }
  }
  update() {
    return e => this.setState({
      body: e.currentTarget.value
    })
  }
  render() {
    return (
    <div className='edit-comment-container'>
      <form className='edit-comment-form' onSubmit={this.editButtonClicked}>
        <input type='text' value={this.state.body} onChange={this.update()}></input>
        <button type='submit'>Edit</button>
      </form>
    </div>
    )
  }
}