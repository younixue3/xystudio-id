import pb from '../pbase';

const fetchBlogs = async () => {
  const records = await pb.collection('blog').getFullList({
    sort: '-someField'
  });
  return records;
};

const getBlog = async id => {
  const record = await pb.collection('blog').getOne(id);
  return record;
};

const createBlog = async data => {
  const record = await pb.collection('blog').create(data);
  return record;
};

const updateBlog = async (id, data) => {
  const record = await pb.collection('blog').update(id, data);
  return record;
};

const deleteBlog = async id => {
  const record = await pb.collection('blog').delete(id);
  return record;
};

export { fetchBlogs, getBlog, createBlog, updateBlog, deleteBlog };
