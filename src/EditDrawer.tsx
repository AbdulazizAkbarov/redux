import { Button, Drawer, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { editTodo } from "./CounterSlice";

function EditDrawer({ edit, onClose }: { edit: any; onClose: () => void }) {
  const dispatch = useDispatch();
  return (
    <Drawer
      open={edit ? true : false}
      onClose={() => {
        onClose();
      }}
    >
      {edit && (
        <Form
          layout="vertical"
          initialValues={edit}
          onFinish={(value: { name: String }) => {
            dispatch(editTodo({ id: edit.id, name: value.name }));
            onClose();
          }}
        >
          <Form.Item label={"Userni O'zgartiring :"} name={"name"}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Qo'shish
            </Button>
          </Form.Item>
        </Form>
      )}
    </Drawer>
  );
}

export default EditDrawer;
