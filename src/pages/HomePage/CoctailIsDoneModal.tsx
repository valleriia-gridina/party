import Section from "components/Section/Section";

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CoctailIsDoneModal = ({ isOpen, onClose }: TProps) => {
  if (!isOpen) return;

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <Section title="Coctail is done!">
          <button onClick={onClose}>Ok</button>
        </Section>
      </div>
    </div>
  );
};

export default CoctailIsDoneModal;
