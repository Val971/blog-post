import { Spin } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import "antd/dist/antd.css";
import Post from "./components/Post";
import {
  getPost,
  deletePost,
  setMode,
  updatePost,
  createPost,
  setShowModal
} from "./redux/slices/postSlice";
import CreatePost from "./components/CreatePost";
import FormPost from "./components/FormPost";

function App() {
  const dispatch = useDispatch();
  const { loading,post } = useSelector((state) => ({ ...state.postState }));
  const onSearch = (id) => {
    if (!id) {
      window.alert("Please Provide Post ID");
    } else {
      dispatch(getPost({ id }));
    }
  };
  const onDelete = (id) => {
    dispatch(deletePost({ id }));
  };
  const onCreate = (form) => {
    dispatch(createPost({ ...form,id:5 }));
  };
  const onEdit = (value) => {
    dispatch(setMode({ editMode: value }));
  };

  const onSave = (value) => {
    const { title, id, body } = value;
    dispatch(updatePost({ title, id, body }));
    dispatch(setMode({ editMode: false }));
  };
  

  return (
    <div className="App">
      <FormPost showModal={(e) => dispatch(setShowModal({ showModal: e }))} onSearch={onSearch} />
      {loading ? (
        <Spin />
      ) : (
        <Post
          post={post}
          onSave={(e) => onSave(e)}
          onReverse={(e) => onEdit(e)}
          onEdit={(e) => onEdit(e)}
          onDelete={(e) => onDelete(e)}
        />
      )}
      <CreatePost
        handleOk={(e) => onCreate(e)}
        handleCancel={(e) =>  dispatch(setShowModal({ showModal: e }))}
      />
    </div>
  );
}

export default App;
