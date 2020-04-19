import React, { Component } from 'react';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utils'

import Posts from './Posts';

class Application extends Component {
  state = {
    posts: [],
  };

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs)
      this.setState({ posts });
    })
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  handleCreate = async post => {
    firestore.collection('posts').add(post);
  };

  handleRemove = async id => {
    firestore.doc(`posts/${id}`).delete();
  }

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
