export type Team = {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
};

type TeamCardProps = {
  team: Team;
};

function TeamCard({ team }: TeamCardProps) {
  return (
    // Reusable card for one school's key details.
    <article className="team-card">
      <h2>{team.school}</h2>
      <p>
        <span className="label">Mascot:</span> {team.name}
      </p>
      <p>
        <span className="label">Location:</span> {team.city}, {team.state}
      </p>
    </article>
  );
}

export default TeamCard;
