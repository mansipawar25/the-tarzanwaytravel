
import './Travelplanner.css'; 

function TravelPlanner() {
  return (
    <div className='head'><h1>Plan your trip anywhere in the world.</h1>
    <div className="container">
      
      <div className="main-image">
        <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvcGFnZS8xNjg1MDEwMjAzNjUxNTkzNDQ2NzMxNTY3MzgyODEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJoZWlnaHQiOjgwMCwiZml0IjoiY292ZXIifX19" alt="Europe" />
      </div>
      <div className="destinations">
        <div className="destination-card">
          <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjI1NTU4ODA3Njk0OTExOTU2Nzg3MTA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ==" alt="Greece - Island Paradise" />
        </div>
        <div className="destination-card">
          <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQyMjU2MTkwMzkwNDQ4NTcwMjUxNDY0ODQzOC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ==" alt="France - Gourmet Haven" />
        </div>
        <div className="destination-card">
          <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MTk2MTA5MzI1NTAxOTE4NzkyNzI0NjA5NC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ==" alt="Italy - Cultural Haven" />
        </div>
        <div className="destination-card">
          <img src="https://d31aoa0ehgvjdi.cloudfront.net//eyJidWNrZXQiOiJ0aGV0YXJ6YW53YXktd2ViIiwia2V5IjoibWVkaWEvY291bnRyaWVzLzE2ODQ0MjQ3NDYwNzI3OTQxOTg5ODk4NjgxNjQwNi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgwMCwiaGVpZ2h0Ijo5MDAsImZpdCI6ImNvdmVyIn19fQ==" alt="Switzerland - Alpine Wonderland" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default TravelPlanner;