import TeamCard, { type Team } from './TeamCard';

type TeamListProps = {
  teams: Team[];
};

function TeamList({ teams }: TeamListProps) {
  return (
    <section className="team-list" aria-label="College basketball teams">
      {/* Render one TeamCard per team from the JSON array. */}
      {teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </section>
  );
}

export default TeamList;
