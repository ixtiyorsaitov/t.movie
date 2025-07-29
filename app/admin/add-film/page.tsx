import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const AddFilmPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <h1>AddFilm</h1>
      <Input placeholder="Title" />
      <Input placeholder="Description" />
      <Input placeholder="Type" />
      <Input placeholder="Slug" />
      <div>
        Published <Switch />
      </div>
      <Input placeholder="Image url" />
      <Input placeholder="Background image url" />
      <Input placeholder="genres" />
    </div>
  );
};

export default AddFilmPage;
