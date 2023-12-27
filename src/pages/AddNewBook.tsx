import { Button, Cascader, DatePicker, Input, InputNumber, Radio, Select, Switch, TreeSelect } from "antd";
import { useState } from "react";
import { Form } from "antd";

type SizeType = Parameters<typeof Form>[0]['size'];

export default function AddNewBook() {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
      setComponentSize(size);
    };
  
    return (
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
        style={{ maxWidth: 600 }}
      >
      
        <Form.Item label="Title">
          <Input name="title" placeholder=" " className=""/>
        </Form.Item>
        <Form.Item label="Genre">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="Fiction">Fiction</Select.Option>
            <Select.Option value="Dystopian">Dystopian</Select.Option>
            <Select.Option value="Classic">Classic</Select.Option>
            <Select.Option value="Coming-of-Age">Coming of age</Select.Option>
            <Select.Option value="Dystopian">Dystopian</Select.Option>
          </Select>
        </Form.Item>
        
     
        <Form.Item label="Publication year">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    );
}
