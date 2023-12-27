import { Button, Card } from "antd";
import { Link } from "react-router-dom";


export default function BookCard() {
  return (
    <Card title="Default size card sit amet consectetur " extra={<Link to="/" className=""><Button value={'small'}>More</Button></Link>} >
    <p>Card content Lorem ipsum dolor, </p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
  )
}
