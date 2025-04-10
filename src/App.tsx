import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { Form, Button } from "antd";
import Input from "antd/es/input/Input";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import EditDrawer from "./EditDrawer";
import { addTodo, deletTodo } from "./CounterSlice";
import { RootState } from "./redux.types";

function Counter() {
  const [inputValue, setInputValue] = useState("");
  const [edit, setEdit] = useState<{
    name: string;
    id: number;
  }>();

  const todos = useSelector((state: RootState) => {
    return state.counter.todos;
  });

  const delet = (id: number) => {
    dispatch(deletTodo(id));
  };

  const Search = todos.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(inputValue.toLocaleLowerCase());
  });

  const dispatch = useDispatch();

  return (
    <div className="bg-[#253E55] w-[400px] mx-auto rounded-xl p-4 text-white">
     <div className="flex gap-3" >
     <Input
        style={{
          width: "100px",
          height:"33px"
        }}
        placeholder="Qidirish"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
     <Form
        style={{ display: "flex", gap: "10px" }}
        onFinish={(values) => {
          console.log(values);
          dispatch(addTodo(values));
        }}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Iltimos, foydalanuvchi nomini kiriting",
            },
          ]}
        >
          <Input
            style={{
              width: "150px",
            }}
            placeholder="User Qo'shish"
          />
        </Form.Item>

        <Button htmlType="submit" type="primary">
          Add User
        </Button>
      </Form>

   

     </div>
      <div>
        {Search.map((item, i) => {
          return (
            <div
              className="my-2 text-xl border rounded text-start pl-3 flex justify-between items-center p-2"
              key={i}
            >
              {i + 1}. {item.name}
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    setEdit(item);
                  }}
                >
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
      <EditDrawer
        edit={edit}
        onClose={() => {
          setEdit(undefined);
        }}
      />
    </div>
  );
}

export default Counter;
