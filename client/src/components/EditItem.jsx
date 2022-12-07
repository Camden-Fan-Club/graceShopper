import { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function EditItem() {
  const editItem = useStoreActions((actions) => actions.items.editItem);
  const fetchItem = useStoreActions((actions) => actions.items.fetchItem);
  const selectedItem = useStoreState((state) => state.items.selectedItem);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [onSale, setOnSale] = useState(false);
  const navigate = useNavigate();
  const { itemId } = useParams();

  const id = +itemId;
  const prevState = {
    name: selectedItem.name,
    description: selectedItem.description,
    price: selectedItem.price,
    isFeatured: selectedItem.isFeatured,
    onSale: selectedItem.onSale,
  };

  useEffect(() => {
    fetchItem(id);
  }, []);

  useEffect(() => {
    setName(selectedItem?.name);
    setDescription(selectedItem?.description);
    setPrice(selectedItem?.price);
  }, [selectedItem]);

  console.log("prev state", prevState);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await editItem({
          itemId: itemId,
          name: name,
          description: description,
          price: price,
          isFeatured: isFeatured,
          onSale: onSale,
        });
        navigate("/");
      }}
    >
      <input
        placeholder="Name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        type="text"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder="Price"
        value={price}
        type="text"
        onChange={(e) => setPrice(+e.target.value)}
      />
      <label>
        Make item featured?
        <input
          placeholder="Featured Item?"
          value={isFeatured}
          onChange={() => setIsFeatured(!isFeatured)}
          type="checkbox"
        />{" "}
      </label>

      <label>
        Make item on sale?
        <input
          placeholder="On Sale?"
          value={onSale}
          onChange={() => setOnSale(!onSale)}
          type="checkbox"
        />{" "}
      </label>
      <button type="submit">Edit Item</button>
    </form>
  );
}
