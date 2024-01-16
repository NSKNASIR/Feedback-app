import Card from "../shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div  className="about">
        <h1>About this project</h1>
        <p>This is a react app to leave Feedback for a product or service</p>
        <p>version:1.1.0</p>
        <p>
            <Link to='/'>Go to Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
