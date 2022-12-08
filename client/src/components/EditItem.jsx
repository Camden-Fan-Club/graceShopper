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

  useEffect(() => {
    fetchItem(id);
  }, []);

  useEffect(() => {
    setName(selectedItem?.name);
    setDescription(selectedItem?.description);
    setPrice(selectedItem?.price);
  }, [selectedItem]);

  return (
    <div className=" w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-20 px-1">
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
        <div class="flex flex-wrap -mx-3 mb-6 ">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <span>Name:</span>
            <input
              class="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              placeholder="Name"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <span>price:</span>
            <input
              class="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              placeholder="Price"
              value={price}
              type="text"
              onChange={(e) => setPrice(+e.target.value)}
            />
          </div>
          <div class="w-full  md:w-108 px-3">
            <span>description:</span>
            <input
              class="  w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              placeholder="Description"
              value={description}
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label>
              Make item featured?
              <input
                class="ml-2"
                placeholder="Featured Item?"
                value={isFeatured}
                onChange={() => setIsFeatured(!isFeatured)}
                type="checkbox"
              />{" "}
            </label>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="mr-4">
              Make item on sale?
              <input
                class="ml-2"
                placeholder="On Sale?"
                value={onSale}
                onChange={() => setOnSale(!onSale)}
                type="checkbox"
              />{" "}
            </label>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <button
              class=" justify-items-center mt-10 bg-gray-600 hover:bg-bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Edit Item
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
