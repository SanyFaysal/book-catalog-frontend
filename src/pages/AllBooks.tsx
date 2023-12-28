import { DownOutlined } from "@ant-design/icons";
import BookCard from "../components/card/BookCard";
import { Button, Dropdown, Input, MenuProps, Space } from "antd";
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: <p>1st menu item</p>,
    key: "0",
  },
  {
    label: <p>2nd menu item</p>,
    key: "1",
  },
];
export default function AllBooks() {
  return (
    <div className="mt-4">
      <h1 className="text-2xl text-center">All Books</h1>

      <div className="my-5    grid grid-cols-5 gap-3 items-center">
      <h1 className="text-lg">Total Books: 25</h1>
        <div className="col-span-3">
          <div className="grid grid-cols-4 gap-4 items-center justify-center">
            <div className="col-span-1">
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                className="border px-4 py-2 rounded-full"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Publication Year
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
            <Input
              placeholder="Search books from here ..."
              className="col-span-2 py-3 rounded-full px-4"
            />
            <div className="col-span-1">
              <Dropdown
                menu={{ items }}
                trigger={["click"]}
                className="border px-4 py-2 rounded-full"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Genre
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="text-end"><Link to={"/add-new-book"} >
          {" "}
          <Button className="bg-sky-50 text-sky-500 border-none">
            Add New Books
          </Button>
        </Link></div>
      </div>
    
      <div className="grid grid-cols-4 gap-4">
        {new Array(18).fill(null).map((_, index) => (
          <BookCard key={index} />
        ))}
      </div>
    </div>
  );
}
