function insert(post) {
    return db('posts')
      .insert(post)
      .then(ids => ({ id: ids[0] }));
  }