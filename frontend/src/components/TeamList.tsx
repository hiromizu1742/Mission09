import TeamCard, { type Team } from './TeamCard';

type TeamListProps = {
  teams: Team[];
};

function TeamList({ teams }: TeamListProps) {
  return (
    <section className="team-list" aria-label="College basketball teams">
      {teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </section>
  );
}

export default TeamList;
