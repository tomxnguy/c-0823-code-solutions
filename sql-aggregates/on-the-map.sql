select "countryId",
"name",
count(*) as "totalCities"
from "cities",
"countries"
join "countryId" as "c" using ("countryId")
group by "countryId"
order by "totalCities" desc;
