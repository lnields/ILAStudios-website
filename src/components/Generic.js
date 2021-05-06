import Post from './post';
const GenericDashboard = ({children}) => {
const posts = children;
return(
<div className="container">
  <div className="row">
    {posts.map(child => (
      <div key={child.id} id='cardItem' className="col-xs-1">
        <Post child={child} />
      </div>
    ))}
  </div>
</div>
)
}
export default GenericDashboard