import type { components } from "@/types/stapi";

export default function List({ staffBase }: { staffBase: components["schemas"]["StaffBase"][] }) {
  return (
    <>
      <ul>
        {staffBase.map((item) => (
          <li key={item.uid}>
            <span>{`Staff name:${item.name}`}</span>
            <span>{`Staff birth name: ${item.birthName ?? ""}`}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
