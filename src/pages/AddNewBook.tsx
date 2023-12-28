import {
  Button,
  Cascader,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useState } from "react";
import { Form } from "antd";

type SizeType = Parameters<typeof Form>[0]["size"];

export default function AddNewBook() {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <div className="flex flex-col justify-center items-center mb-32">
      <h1 className="text-center text-2xl my-5">Add a new Book</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
        style={{ maxWidth: 600 }}
        className="flex flex-col gap-y-2 w-1/2"
      >
        <div>
          <label>Title</label>
          <Input name="title" placeholder=" " className="" />
        </div>
        <div>
          <label>Genre</label>
          <Select className="block">
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="Fiction">Fiction</Select.Option>
            <Select.Option value="Dystopian">Dystopian</Select.Option>
            <Select.Option value="Classic">Classic</Select.Option>
            <Select.Option value="Coming-of-Age">Coming of age</Select.Option>
            <Select.Option value="Dystopian">Dystopian</Select.Option>
          </Select>
        </div>

        <div>
          <label>Publication Year</label>
          <DatePicker className="block" picker="year" />
        </div>
        <div className="flex justify-center mt-5">
         <Button>Add Book</Button>
        </div>
      </Form>
    </div>
  );
}
