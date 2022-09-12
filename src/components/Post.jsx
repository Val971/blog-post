import React, { useEffect, useState } from "react";
import { Card, Button, Input } from "antd";
import { useSelector } from "react-redux";

export default function Post({ post, onDelete, onEdit, onReverse, onSave }) {
  const [form, setForm] = useState({});
  const { editMode } = useSelector((state) => ({ ...state.postState }));

  useEffect(() => {
    if (post && post[0]){
        setForm({
            id: post[0].id,
            title: post[0].title,
            body: post[0].body,
          });
    }
      
  }, [post]);
  return (
    <>
      {post &&
        post[0] &&
        post[0].id &&
        post.map((p, key) => {
          return (
            <Card
              title={
                editMode ? (
                  <Input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm(prev=> {return {...prev,title:e.target.value}})}
                  />
                ) : (
                  p.title
                )
              }
              extra={<a href="#">More</a>}
              key={key}
              style={{
                width: 300,
              }}
            >
              {editMode ? (
                <Input.TextArea
                  value={p.body}
                  onChange={(e) =>
                    setForm((prev) => {
                      return { ...prev, body: e.taget.value };
                    })
                  }
                />
              ) : (
                <p>{p.body}</p>
              )}
              <div className="card-footer">
                {editMode ? (
                  <>
                    <Button type="primary" onClick={() => onSave(form)}>
                      save
                    </Button>
                    <Button
                      type="primary"
                      onClick={() => onReverse(false)}
                      danger
                    >
                      cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button type="primary" onClick={() => onEdit(true)}>
                      Edit
                    </Button>
                    <Button
                      type="primary"
                      onClick={() => onDelete(p.id)}
                      danger
                    >
                      Delete
                    </Button>
                  </>
                )}
              </div>
            </Card>
          );
        })}
    </>
  );
}
