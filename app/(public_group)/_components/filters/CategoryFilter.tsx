import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Category = {
  id: string;
  categoryName: string;
};

type Props = {
  categories: Category[];
  selectedCategories: string[];
  onCategoryChange: (category: string, checked: boolean) => void;
};

export default function CategoryFilter({
  categories,
  selectedCategories,
  onCategoryChange,
}: Props) {
  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Categories</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {categories.map((category) => (
          <label
            key={category.id}
            className="flex items-center justify-between rounded-md border p-3 cursor-pointer hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-3">
              <Checkbox
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={(checked) =>
                  onCategoryChange(category.id, checked === true)
                }
              />
              <span className="text-sm font-medium">
                {category.categoryName}
              </span>
            </div>
          </label>
        ))}
      </CardContent>
    </Card>
  );
}
