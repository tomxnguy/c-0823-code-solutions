import './Accordion.css';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export default function Accordion({ topics }: Props) {
  return (
    <div>
      {topics.map((topic) => (
        <TopicCard topic={topic} />
      ))}
    </div>
  );
}

type CardProps = {
  topic: Topic;
};

function TopicCard({ topic }: CardProps) {
  return (
    <div>
      <div className="accordion-title">{topic.title}</div>
      <div className="accordion-content">{topic.content}</div>
    </div>
  );
}
