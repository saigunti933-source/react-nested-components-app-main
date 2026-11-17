import Child from './Child'

function Parent() {
  return (
    <section className="parent">
      <h2>Parent Component</h2>
      <p>This is the parent component.</p>

      <Child />
    </section>
  )
}

export default Parent