type HeadingSectionProps = {
  teamCount: number;
};

function HeadingSection({ teamCount }: HeadingSectionProps) {
  return (
    // Intro area shown at the top of the page.
    <header className="heading-section">
      <h1>College Basketball Teams Directory</h1>
      <p>
        Browse all teams loaded from a JSON data source. Total teams listed:{' '}
        <strong>{teamCount}</strong>
      </p>
    </header>
  );
}

export default HeadingSection;
