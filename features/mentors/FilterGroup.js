import FilterButton from "./FilterButton";

export default function FilterGroup({ filterName, filterData, filterParam }) {
  return (
    <>
      <h3 className="text-sm font-semibold text-gray-900 mb-3">{filterName}</h3>
      <div className="flex flex-wrap gap-3">
        {filterData.map((level) => {
          return (
            <FilterButton
              filterName={filterParam}
              filterValue={level.value}
              key={level.label}
            >
              {level.label}
            </FilterButton>
          );
        })}
      </div>
    </>
  );
}
