import { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditItem() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [isFeatured, setIsFeatured] = useState();
  const [onSale, setOnSale] = useState();
  const navigate = useNavigate();
  const { itemId } = useParams();
  const editItem = useStoreActions((actions) => actions.items.editItem);

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
        onChange={(e) => setPrice(e.target.value)}
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
