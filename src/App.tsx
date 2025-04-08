import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState, addTodo, deletTodo } from "./Store";
import { useState } from "react";
import { Form, Button } from "antd";
import Input from "antd/es/input/Input";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function Counter() {
  const todos = useSelector((state: RootState) => {
    return state.counter.todos;
  });

  const delet = (id: number) => {
    dispatch(deletTodo(id));
  };

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="bg-[#253E55] w-[400px] mx-auto rounded-xl p-4 text-white">
      <Form style={{ display: "flex", gap: "10px" }}>
        <Form.Item style={{ color: "white" }}>
          <Input
            style={{
              width: "265px",
            }}
            placeholder="User Qo'shish"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          onClick={() => {
            dispatch(addTodo(inputValue));
            setInputValue("");
          }}
        >
          Add User
        </Button>
      </Form>

      <div>
        {todos.map((item, i) => {
          return (
            <div
              className="my-2 text-xl border rounded text-start pl-3 flex justify-between items-center p-2"
              key={i}
            >
              {i + 1}. {item.name}
              <div className="flex gap-2">
                <Button>
                  <EditOutlined />
                </Button>
                <Button danger onClick={() => delet(item.id)}>
                  <DeleteOutlined />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Counter;
