export default function EventPage({ params }: { params: { id: string } }) {
  return <div>Event Detail — ID: {params.id}</div>;
}
