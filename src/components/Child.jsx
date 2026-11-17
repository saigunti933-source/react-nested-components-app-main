import GrandChild from './GrandChild'

function Child() {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <p>This component is inside the parent component.</p>

      <GrandChild />
    </div>
  )
}

export default Child