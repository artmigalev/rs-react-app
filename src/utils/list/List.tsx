import type { components } from "@/types/stapi";

export default function List({ staffBase }: { staffBase: components["schemas"]["StaffBase"][] }) {
  const itemsTitle: string[] = [
    "Staff name",
    "Staff birth name",
    "Date the staff was born",
    "Place the staff was born",
  ];

  return (
    <>
      <ul>
        {staffBase.map((item: components["schemas"]["StaffBase"]) => {
          return (
            <li key={item.uid} className="list-item">
              <div>
                <span>{itemsTitle[0]}</span>
                <span>{item.name}</span>
              </div>
              <div>
                {item.birthName && (
                  <>
                    <span>{itemsTitle[1]}</span>
                    <span>{item.birthName}</span>
                  </>
                )}
              </div>
              <div>
                {item.dateOfBirth && (
                  <>
                    <span>{itemsTitle[2]}</span>
                    <span>{item.dateOfBirth}</span>
                  </>
                )}
              </div>
              <div>
                {item.placeOfBirth && (
                  <>
                    <span>{itemsTitle[3]}</span>
                    <span>{item.name}</span>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
