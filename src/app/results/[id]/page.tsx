interface ResultsPageProps {
  params: {
    id: string;
  };
}

export default function ResultsPage({ params }: ResultsPageProps) {
  return (
    <main>
      <h1>Shareable Results Page</h1>
      <p>Viewing results for audit ID: {params.id}</p>
    </main>
  );
}
